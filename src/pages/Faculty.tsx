import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle,
  XCircle,
  MessageSquare,
  Eye,
  Filter,
  Download,
  Search,
  Clock,
} from "lucide-react";

const submissions = [
  {
    id: 1,
    studentName: "John Doe",
    studentId: "CS2021001",
    activityTitle: "National Mathematics Olympiad",
    activityType: "Academic Competition",
    submissionDate: "2024-01-15",
    status: "pending" as const,
    points: 50,
    description: "Participated in the National Mathematics Olympiad and secured 2nd position in state level competition.",
    files: ["certificate.pdf", "participation_proof.jpg"],
  },
  {
    id: 2,
    studentName: "Jane Smith", 
    studentId: "CS2021002",
    activityTitle: "AI Workshop by Google",
    activityType: "Workshop/Seminar",
    submissionDate: "2024-01-14",
    status: "approved" as const,
    points: 30,
    description: "Attended comprehensive 3-day workshop on AI and Machine Learning fundamentals.",
    files: ["certificate.pdf"],
  },
  {
    id: 3,
    studentName: "Mike Johnson",
    studentId: "CS2021003",
    activityTitle: "Basketball Tournament",
    activityType: "Sports Tournament",
    submissionDate: "2024-01-13",
    status: "pending" as const,
    points: 25,
    description: "Team captain for inter-college basketball tournament.",
    files: ["team_photo.jpg", "match_results.pdf"],
  },
];

const statusColors = {
  pending: "bg-warning text-warning-foreground",
  approved: "bg-success text-success-foreground", 
  rejected: "bg-destructive text-destructive-foreground",
};

export default function Faculty() {
  const [selectedSubmission, setSelectedSubmission] = useState<typeof submissions[0] | null>(null);
  const [reviewComment, setReviewComment] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const handleApprove = (id: number) => {
    console.log("Approving submission:", id);
    // Handle approval logic
  };

  const handleReject = (id: number, comment: string) => {
    console.log("Rejecting submission:", id, "with comment:", comment);
    // Handle rejection logic
  };

  const handleRequestInfo = (id: number, comment: string) => {
    console.log("Requesting info for submission:", id, "with comment:", comment);
    // Handle request info logic
  };

  const filteredSubmissions = submissions.filter((submission) => {
    if (filterStatus !== "all" && submission.status !== filterStatus) return false;
    if (filterType !== "all" && submission.activityType !== filterType) return false;
    return true;
  });

  const pendingCount = submissions.filter(s => s.status === "pending").length;
  const approvedCount = submissions.filter(s => s.status === "approved").length;
  const totalSubmissions = submissions.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Faculty Dashboard</h1>
        <p className="text-muted-foreground">Review and manage student activity submissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
                <p className="text-2xl font-bold text-warning">{pendingCount}</p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved Today</p>
                <p className="text-2xl font-bold text-success">{approvedCount}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Submissions</p>
                <p className="text-2xl font-bold text-primary">{totalSubmissions}</p>
              </div>
              <Eye className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Points</p>
                <p className="text-2xl font-bold text-accent">35</p>
              </div>
              <Download className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 flex-1">
              <Search className="h-4 w-4" />
              <Input placeholder="Search by student name or activity..." className="max-w-sm" />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Activity Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Academic Competition">Academic Competition</SelectItem>
                <SelectItem value="Sports Tournament">Sports Tournament</SelectItem>
                <SelectItem value="Workshop/Seminar">Workshop/Seminar</SelectItem>
                <SelectItem value="Community Service">Community Service</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Submissions Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Student Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{submission.studentName}</div>
                      <div className="text-sm text-muted-foreground">{submission.studentId}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{submission.activityTitle}</div>
                  </TableCell>
                  <TableCell>{submission.activityType}</TableCell>
                  <TableCell>{submission.submissionDate}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[submission.status]}>
                      {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{submission.points}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedSubmission(submission)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Review Submission</DialogTitle>
                          </DialogHeader>
                          {selectedSubmission && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium mb-1">Student</h4>
                                  <p>{selectedSubmission.studentName}</p>
                                  <p className="text-sm text-muted-foreground">{selectedSubmission.studentId}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-1">Activity</h4>
                                  <p>{selectedSubmission.activityTitle}</p>
                                  <p className="text-sm text-muted-foreground">{selectedSubmission.activityType}</p>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-medium mb-2">Description</h4>
                                <p className="text-sm bg-muted p-3 rounded">{selectedSubmission.description}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-medium mb-2">Supporting Documents</h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedSubmission.files.map((file, index) => (
                                    <Badge key={index} variant="outline" className="cursor-pointer">
                                      {file}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium mb-2">Review Comment</h4>
                                <Textarea
                                  placeholder="Add your review comment..."
                                  value={reviewComment}
                                  onChange={(e) => setReviewComment(e.target.value)}
                                />
                              </div>

                              <div className="flex gap-2">
                                <Button 
                                  onClick={() => handleApprove(selectedSubmission.id)}
                                  className="flex-1"
                                >
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Approve
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => handleRequestInfo(selectedSubmission.id, reviewComment)}
                                  className="flex-1"
                                >
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  Request Info
                                </Button>
                                <Button 
                                  variant="destructive"
                                  onClick={() => handleReject(selectedSubmission.id, reviewComment)}
                                  className="flex-1"
                                >
                                  <XCircle className="mr-2 h-4 w-4" />
                                  Reject
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}