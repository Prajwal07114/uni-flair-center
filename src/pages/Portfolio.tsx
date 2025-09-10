import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Edit,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Calendar,
  Search,
  Filter,
} from "lucide-react";

const personalInfo = {
  name: "Ethan Carter",
  id: "203456789",
  university: "University of Technology",
  email: "ethan.carter@email.com",
  phone: "+1 (555) 123-4567",
  address: "123 University Ave, City, State",
  dateOfBirth: "1998-05-15",
  gpa: "3.8",
  credits: "120",
  major: "Computer Science",
  graduation: "May 2024",
  awards: "Dean's List (2021, 2022)",
  activities: "Robotics Club, Coding Competition",
};

const technicalSkills = [
  "Python", "JavaScript", "React", "Node.js", "SQL"
];

const softSkills = [
  "Communication", "Teamwork", "Problem-Solving"
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Intermediate" }
];

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button variant="outline" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-primary"></div>
        <CardContent className="relative pt-0 pb-6">
          <div className="flex flex-col items-center -mt-16">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                EC
              </AvatarFallback>
            </Avatar>
            
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
              <p className="text-muted-foreground">ID: {personalInfo.id}</p>
              <p className="text-muted-foreground">{personalInfo.university}</p>
              
              <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-primary/10 rounded-full">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-sm text-primary font-medium">Verified Student</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Full Name</span>
                <span className="font-medium">{personalInfo.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date of Birth</span>
                <span className="font-medium">{personalInfo.dateOfBirth}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone</span>
                <span className="font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {personalInfo.phone}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Address</span>
                <span className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {personalInfo.address}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Academic History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{personalInfo.gpa}</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">{personalInfo.credits}</div>
              <div className="text-sm text-muted-foreground">Credits</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-success mb-1">{personalInfo.major}</div>
              <div className="text-sm text-muted-foreground">Major</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-warning mb-1">{personalInfo.graduation}</div>
              <div className="text-sm text-muted-foreground">Graduation</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Awards</span>
              <span className="font-medium">{personalInfo.awards}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Activities</span>
              <span className="font-medium">{personalInfo.activities}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="px-3 py-1 bg-success/10 text-success border-success/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Languages</h4>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <Badge variant="outline" className="px-3 py-1 bg-accent/10 text-accent border-accent/20">
                    {lang.name}
                  </Badge>
                  <span className="text-sm text-muted-foreground">({lang.level})</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}