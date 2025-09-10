import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Upload,
  Calendar as CalendarIcon,
  File,
  Image,
  X,
  Plus,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const activityTypes = [
  "Academic Competition",
  "Sports Tournament",
  "Cultural Event",
  "Community Service",
  "Workshop/Seminar",
  "Research Project",
  "Leadership Role",
  "Certification Course",
];

const statusColors = {
  pending: "bg-warning text-warning-foreground",
  approved: "bg-success text-success-foreground",
  rejected: "bg-destructive text-destructive-foreground",
};

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    points: "",
    certificate: "",
  });

  const activities = [
    {
      id: 1,
      title: "National Mathematics Olympiad",
      type: "Academic Competition",
      date: "2024-01-15",
      status: "approved" as const,
      points: 50,
      description: "Participated in the National Mathematics Olympiad and secured 2nd position.",
      files: ["certificate.pdf", "participation_proof.jpg"],
    },
    {
      id: 2,
      title: "Basketball Inter-College Tournament",
      type: "Sports Tournament", 
      date: "2024-01-12",
      status: "pending" as const,
      points: 30,
      description: "Team captain for basketball tournament representing our college.",
      files: ["team_photo.jpg"],
    },
    {
      id: 3,
      title: "AI Workshop by Google",
      type: "Workshop/Seminar",
      date: "2024-01-08",
      status: "rejected" as const,
      points: 0,
      description: "Attended 3-day workshop on Artificial Intelligence and Machine Learning.",
      files: ["certificate.pdf"],
    },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting activity:", { ...formData, date: selectedDate, files: selectedFiles });
    setShowForm(false);
    // Reset form
    setFormData({ title: "", description: "", type: "", points: "", certificate: "" });
    setSelectedDate(undefined);
    setSelectedFiles([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Activity Tracker</h1>
          <p className="text-muted-foreground">Manage and track your academic and extracurricular activities</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Activity
        </Button>
      </div>

      {/* Activity Form */}
      {showForm && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Upload New Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Activity Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter activity title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Activity Type *</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity type" />
                  </SelectTrigger>
                  <SelectContent>
                    {activityTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Activity Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="points">Expected Points</Label>
                <Input
                  id="points"
                  type="number"
                  placeholder="Enter expected points"
                  value={formData.points}
                  onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your activity, achievements, and learnings..."
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <Label>Upload Supporting Documents</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6">
                <div className="text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop files here, or click to select
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Choose Files
                    </Button>
                  </label>
                </div>
              </div>

              {/* Selected Files */}
              {selectedFiles.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Selected Files:</p>
                  <div className="space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                        <div className="flex items-center gap-2">
                          {file.type.startsWith('image/') ? (
                            <Image className="h-4 w-4" />
                          ) : (
                            <File className="h-4 w-4" />
                          )}
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFile(index)}
                          className="h-8 w-8"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Button onClick={handleSubmit} className="flex-1">
                Submit Activity
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Activity type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {activityTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
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
          </div>
        </CardContent>
      </Card>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="shadow-card hover:shadow-floating transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{activity.title}</h3>
                    <Badge className={statusColors[activity.status]}>
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    {activity.type} • {activity.date}
                  </p>
                  <p className="text-sm">{activity.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{activity.points} pts</div>
                  <div className="text-xs text-muted-foreground">Points</div>
                </div>
              </div>

              {activity.files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Attachments:</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.files.map((file, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer">
                        <File className="h-3 w-3 mr-1" />
                        {file}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}