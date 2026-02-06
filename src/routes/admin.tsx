import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, Users, MessageSquare, RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

interface RsvpEntry {
  id: number;
  name: string;
  phone: string;
  party_size: string;
  event_type: string;
  created_at: string;
}

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

function AdminPage() {
  const [rsvpData, setRsvpData] = React.useState<RsvpEntry[]>([]);
  const [guestbookData, setGuestbookData] = React.useState<GuestbookEntry[]>(
    [],
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<"rsvp" | "guestbook">(
    "rsvp",
  );
  const [searchName, setSearchName] = React.useState("");
  const [searchPhone, setSearchPhone] = React.useState("");
  const [filterEventType, setFilterEventType] = React.useState<string>("all");

  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const [rsvpResult, guestbookResult] = await Promise.all([
        supabase
          .from("rsvp")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("guestbook")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      console.log("RSVP Result:", rsvpResult);
      console.log("Guestbook Result:", guestbookResult);

      if (rsvpResult.error) {
        console.error("RSVP Error:", rsvpResult.error);
      } else if (rsvpResult.data) {
        setRsvpData(rsvpResult.data);
      }

      if (guestbookResult.error) {
        console.error("Guestbook Error:", guestbookResult.error);
      } else if (guestbookResult.data) {
        setGuestbookData(guestbookResult.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const totalGuests = rsvpData.reduce(
    (sum, entry) => sum + Number.parseInt(entry.party_size || "1"),
    0,
  );

  // Get unique event types for filter dropdown
  const eventTypes = React.useMemo(() => {
    const types = new Set(
      rsvpData.map((entry) => entry.event_type).filter(Boolean),
    );
    return Array.from(types);
  }, [rsvpData]);

  // Filter RSVP data based on search and filter criteria
  const filteredRsvpData = React.useMemo(() => {
    return rsvpData.filter((entry) => {
      const matchesName = entry.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const matchesPhone = entry.phone
        .toLowerCase()
        .includes(searchPhone.toLowerCase());
      const matchesEventType =
        filterEventType === "all" || entry.event_type === filterEventType;
      return matchesName && matchesPhone && matchesEventType;
    });
  }, [rsvpData, searchName, searchPhone, filterEventType]);

  // Calculate filtered total guests
  const filteredTotalGuests = filteredRsvpData.reduce(
    (sum, entry) => sum + Number.parseInt(entry.party_size || "1"),
    0,
  );

  return (
    <div className="min-h-screen bg-stone-100 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-stone-800">Admin Dashboard</h1>
          <Button
            onClick={fetchData}
            variant="outline"
            className="flex items-center gap-2"
            disabled={isLoading}
          >
            <RefreshCw
              className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
            />
            Làm mới
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-stone-600">
                Tổng RSVP
              </CardTitle>
              <Users className="w-4 h-4 text-stone-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rsvpData.length}</div>
              <p className="text-xs text-stone-500">lượt xác nhận</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-stone-600">
                Tổng khách
              </CardTitle>
              <Users className="w-4 h-4 text-stone-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalGuests}</div>
              <p className="text-xs text-stone-500">người tham dự</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-stone-600">
                Lời chúc
              </CardTitle>
              <MessageSquare className="w-4 h-4 text-stone-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{guestbookData.length}</div>
              <p className="text-xs text-stone-500">lời chúc</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <Button
            variant={activeTab === "rsvp" ? "default" : "outline"}
            onClick={() => setActiveTab("rsvp")}
            className={
              activeTab === "rsvp" ? "bg-[#A03D1A] hover:bg-[#8B3516]" : ""
            }
          >
            RSVP ({rsvpData.length})
          </Button>
          <Button
            variant={activeTab === "guestbook" ? "default" : "outline"}
            onClick={() => setActiveTab("guestbook")}
            className={
              activeTab === "guestbook" ? "bg-[#A03D1A] hover:bg-[#8B3516]" : ""
            }
          >
            Sổ lưu bút ({guestbookData.length})
          </Button>
        </div>

        {/* Filters - Only show for RSVP tab */}
        {activeTab === "rsvp" && (
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <Input
                placeholder="Tìm theo tên..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <Input
                placeholder="Tìm theo số điện thoại..."
                value={searchPhone}
                onChange={(e) => setSearchPhone(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterEventType} onValueChange={setFilterEventType}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Lọc theo sự kiện" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả sự kiện</SelectItem>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(searchName || searchPhone || filterEventType !== "all") && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchName("");
                  setSearchPhone("");
                  setFilterEventType("all");
                }}
                className="text-stone-500"
              >
                Xóa bộ lọc
              </Button>
            )}
          </div>
        )}

        {/* Filtered results info */}
        {activeTab === "rsvp" &&
          (searchName || searchPhone || filterEventType !== "all") && (
            <p className="text-sm text-stone-500 mb-4">
              Hiển thị {filteredRsvpData.length} / {rsvpData.length} kết quả (
              {filteredTotalGuests} khách)
            </p>
          )}

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#A03D1A]" />
          </div>
        ) : (
          <Card>
            <CardContent className="p-0">
              {activeTab === "rsvp" ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-stone-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-stone-600">
                          #
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Họ tên
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Số điện thoại
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Số người
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Sự kiện
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Thời gian
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRsvpData.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="text-center py-8 text-stone-400"
                          >
                            {rsvpData.length === 0
                              ? "Chưa có dữ liệu RSVP"
                              : "Không tìm thấy kết quả phù hợp"}
                          </td>
                        </tr>
                      ) : (
                        filteredRsvpData.map((entry, index) => (
                          <tr
                            key={entry.id}
                            className="border-b hover:bg-stone-50"
                          >
                            <td className="p-4 text-stone-500">{index + 1}</td>
                            <td className="p-4 font-medium">{entry.name}</td>
                            <td className="p-4 text-stone-600">
                              {entry.phone}
                            </td>
                            <td className="p-4 text-stone-600">
                              {entry.party_size}
                            </td>
                            <td className="p-4">
                              <span className="px-2 py-1 bg-stone-100 rounded text-sm">
                                {entry.event_type}
                              </span>
                            </td>
                            <td className="p-4 text-stone-500 text-sm">
                              {formatDate(entry.created_at)}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-stone-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-stone-600">
                          #
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Họ tên
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Lời chúc
                        </th>
                        <th className="text-left p-4 font-medium text-stone-600">
                          Thời gian
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {guestbookData.length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="text-center py-8 text-stone-400"
                          >
                            Chưa có lời chúc
                          </td>
                        </tr>
                      ) : (
                        guestbookData.map((entry, index) => (
                          <tr
                            key={entry.id}
                            className="border-b hover:bg-stone-50"
                          >
                            <td className="p-4 text-stone-500">{index + 1}</td>
                            <td className="p-4 font-medium whitespace-nowrap">
                              {entry.name}
                            </td>
                            <td className="p-4 text-stone-600 max-w-xl">
                              <p className="line-clamp-3">{entry.message}</p>
                            </td>
                            <td className="p-4 text-stone-500 text-sm whitespace-nowrap">
                              {formatDate(entry.created_at)}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
