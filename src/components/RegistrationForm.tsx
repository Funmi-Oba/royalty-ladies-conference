import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

function Spinner() {
  return (
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink border-solid"></div>
  );
}

export function RegistrationForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false); // 🔑 track submission
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    confirmEmail: "",
    occupation: "",
    isUndergraduate: "",
    school: "",
    department: "",
    level: "",
    hearAbout: "",
    schoolFellowshipName: "",
    interestedInSkills: "",
    skillType: "",
    expectations: "",
  });

  const [showSchoolFields, setShowSchoolFields] = useState(false);
  const [showSkillsField, setShowSkillsField] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    if (formData.email !== formData.confirmEmail) {
      toast({
        title: "Email Mismatch",
        description: "Email and confirm email must match.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true); // show overlay

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/submitForm`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // send raw state, backend maps to Airtable
        }
      );

      if (res.ok) {
        toast({
          title: "Registration Successful!",
          description:
            "Thank you for registering for Royalty Ladies Conference 2025. We can't wait to see you there!",
        });
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          confirmEmail: "",
          occupation: "",
          isUndergraduate: "",
          school: "",
          department: "",
          level: "",
          hearAbout: "",
          schoolFellowshipName: "",
          interestedInSkills: "",
          skillType: "",
          expectations: "",
        });
        setShowSchoolFields(false);
        setShowSkillsField(false);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong, please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false); // hide overlay
    }
  };

  const handleHearAboutChange = (value: string) => {
    setFormData({ ...formData, hearAbout: value });
    setShowSchoolFields(value === "My school" || value === "My Fellowship");
  };

  const handleSkillsInterestChange = (value: string) => {
    setFormData({ ...formData, interestedInSkills: value });
    setShowSkillsField(value === "YES");
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <Spinner />
          <p className="ml-4 text-white text-lg font-medium">Submitting...</p>
        </div>
      )}

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl pb-2 font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent animate-shimmer mb-4">
            Fill the Form to Register
          </CardTitle>
          <CardDescription className="text-lg">
            Join us for an extraordinary experience of transformation and
            empowerment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="border-royal/20 focus:border-royal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="border-royal/20 focus:border-royal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-royal/20 focus:border-royal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmEmail">Confirm Email Address *</Label>
                <Input
                  id="confirmEmail"
                  type="email"
                  value={formData.confirmEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmEmail: e.target.value })
                  }
                  required
                  className="border-royal/20 focus:border-royal"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation *</Label>
              <Input
                id="occupation"
                value={formData.occupation}
                onChange={(e) =>
                  setFormData({ ...formData, occupation: e.target.value })
                }
                required
                className="border-royal/20 focus:border-royal"
              />
            </div>

            {/* Undergraduate Status */}
            <div className="space-y-4">
              <Label>Are you an undergraduate? *</Label>
              <RadioGroup
                value={formData.isUndergraduate}
                onValueChange={(value) =>
                  setFormData({ ...formData, isUndergraduate: value })
                }
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="undergrad-yes" />
                  <Label htmlFor="undergrad-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="undergrad-no" />
                  <Label htmlFor="undergrad-no">NO</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Undergraduate Details */}
            {formData.isUndergraduate === "YES" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-royal-light/10 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="school">School *</Label>
                  <Input
                    id="school"
                    value={formData.school}
                    onChange={(e) =>
                      setFormData({ ...formData, school: e.target.value })
                    }
                    className="border-royal/20 focus:border-royal"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="border-royal/20 focus:border-royal"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Level *</Label>
                  <Select
                    value={formData.level}
                    onValueChange={(value) =>
                      setFormData({ ...formData, level: value })
                    }
                  >
                    <SelectTrigger className="border-royal/20 focus:border-royal">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100/ND1">100 Level/ND1</SelectItem>
                      <SelectItem value="200/ND2">200 Level/ND2</SelectItem>
                      <SelectItem value="300">300 Level</SelectItem>
                      <SelectItem value="400/HND1">400 Level/HND1</SelectItem>
                      <SelectItem value="500/HND2">500 Level/HND2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* How did you hear about us */}
            <div className="space-y-2">
              <Label>How did you hear about this event? *</Label>
              <Select
                value={formData.hearAbout}
                onValueChange={handleHearAboutChange}
              >
                <SelectTrigger className="border-royal/20 focus:border-royal">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="Facebook">Facebook</SelectItem>
                  <SelectItem value="Tiktok">TikTok</SelectItem>
                  <SelectItem value="Whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="My School">My school</SelectItem>
                  <SelectItem value="My Church">My Church</SelectItem>
                  <SelectItem value="My Fellowship">My Fellowship</SelectItem>
                  <SelectItem value="A Friend">A friend</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* School/Fellowship Details */}
            {showSchoolFields && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-gold-light/10 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="schoolFellowshipName">
                    {formData.hearAbout === "My school"
                      ? "School Name"
                      : "Fellowship Name"}{" "}
                    *
                  </Label>
                  <Input
                    id="schoolFellowshipName"
                    value={formData.schoolFellowshipName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schoolFellowshipName: e.target.value,
                      })
                    }
                    className="border-royal/20 focus:border-royal"
                  />
                </div>
                <div className="space-y-2">
                  {/* <Label htmlFor="schoolDepartment">Department *</Label>
                <Input
                  id="schoolDepartment"
                  value={formData.schoolDepartment}
                  onChange={(e) => setFormData({ ...formData, schoolDepartment: e.target.value })}
                  required
                  className="border-royal/20 focus:border-royal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="schoolLevel">Level *</Label>
                <Input
                  id="schoolLevel"
                  value={formData.schoolLevel}
                  onChange={(e) => setFormData({ ...formData, schoolLevel: e.target.value })}
                  required
                  className="border-royal/20 focus:border-royal"
                /> */}
                </div>
              </div>
            )}

            {/* Vocational Skills Interest */}
            <div className="space-y-4">
              <Label>
                Will you be interested in the vocational skills training? *
              </Label>
              <RadioGroup
                value={formData.interestedInSkills}
                onValueChange={handleSkillsInterestChange}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="skills-yes" />
                  <Label htmlFor="skills-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="skills-no" />
                  <Label htmlFor="skills-no">NO</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Skills Selection */}
            {showSkillsField && (
              <div className="space-y-2">
                <Label>Select your preferred skill *</Label>
                <Select
                  value={formData.skillType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, skillType: value })
                  }
                >
                  <SelectTrigger className="border-royal/20 focus:border-royal">
                    <SelectValue placeholder="Choose a skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adire">Adire making</SelectItem>
                    <SelectItem value="pastries">Pastries</SelectItem>
                    <SelectItem value="toiletries">
                      Toiletries production (liquid soap, Bleach, air freshener,
                      toilet cleaner)
                    </SelectItem>
                    <SelectItem value="makeup">
                      Makeup and gele tying
                    </SelectItem>
                    <SelectItem value="beads">Bead making</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Expectations */}
            <div className="space-y-2">
              <Label htmlFor="expectations">
                What are you expecting from this event? *
              </Label>
              <Textarea
                id="expectations"
                value={formData.expectations}
                onChange={(e) =>
                  setFormData({ ...formData, expectations: e.target.value })
                }
                required
                rows={4}
                className="border-royal/20 focus:border-royal"
                placeholder="Share your expectations and what you hope to gain from attending the Royal Ladies Conference..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-royal to-gold hover:from-royal-deep hover:to-gold-dark text-white font-semibold py-3 text-lg transition-all duration-300"
            >
              {loading ? "Registering..." : "Register Now"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
