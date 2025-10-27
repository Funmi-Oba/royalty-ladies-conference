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
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description:
          "Please enter a valid email address (e.g. name@example.com).",
        variant: "destructive",
      });
      return;
    }

    // Required: Undergraduate choice
    if (!formData.isUndergraduate) {
      toast({
        title: "Missing Field",
        description: "Please select whether you are an undergraduate.",
        variant: "destructive",
      });
      return;
    }

    // If YES → check school fields
    if (
      formData.isUndergraduate === "YES" &&
      (!formData.school || !formData.department || !formData.level)
    ) {
      toast({
        title: "Incomplete Fields",
        description: "Please fill out your school, department, and level.",
        variant: "destructive",
      });
      return;
    }

    // Required: How did you hear about us
    if (!formData.hearAbout) {
      toast({
        title: "Missing Field",
        description: "Please select how you heard about this event.",
        variant: "destructive",
      });
      return;
    }

    // Required: Vocational skills interest
    if (!formData.interestedInSkills) {
      toast({
        title: "Missing Field",
        description:
          "Please indicate if you’re interested in vocational skills training.",
        variant: "destructive",
      });
      return;
    }

    // If YES → check skill type
    // if (formData.interestedInSkills === "YES" && !formData.skillType) {
    //   toast({
    //     title: "Missing Field",
    //     description: "Please select your preferred vocational skill.",
    //     variant: "destructive",
    //   });
    //   return;
    // }
if (formData.interestedInSkills === "YES") {

  formData.skillType = "Closed"; // optional, helps backend know it’s closed
}
    // All validations passed, proceed with submission
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
        // toast({
        //   title: "Registration Successful!",
        //   description:
        //     "Thank you for registering for Royalty Ladies Conference 2025. We can't wait to see you there!",
        // });
        setShowSuccessDialog(true);

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
    <div className="relative" id="registernow">
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
                  placeholder="080...."
                  pattern="[0-9]{11}"
                  title="Enter a valid phone number (11 digits)"
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
                  placeholder="name@example.com"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$"
                  title="Enter a valid email address (e.g. name@example.com)"
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
                  placeholder="name@example.com"
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
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="undergrad-yes" required />
                  <Label htmlFor="undergrad-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="undergrad-no" required />
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
                required
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
            {/* {showSkillsField && (
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
                    <SelectItem value="Adire">Adire making</SelectItem>
                    <SelectItem value="Pastries">Pastries</SelectItem>
                    <SelectItem value="Toiletries">
                      Toiletries production (liquid soap, Bleach, air freshener,
                      toilet cleaner)
                    </SelectItem>
                    <SelectItem value="Makeup and gele tying">
                      Makeup and gele tying
                    </SelectItem>
                    <SelectItem value="Tailoring">
                      Tailoring (Not for beginners)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )} */}

            {/* Skills Selection */}
            {showSkillsField && (
              <div className="relative space-y-2">
                {/* Transparent Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center rounded-lg z-10">
                  <h3 className="text-lg font-bold mb-1">
                    Registration for Skill Acquisition has Closed
                  </h3>
                  <p className="text-sm">
                    You can still register for the main event
                  </p>
                </div>

                {/* Disabled Form Elements Behind Overlay */}
                <Label>Select your preferred skill *</Label>
                <Select
                  value={formData.skillType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, skillType: value })
                  }
                  disabled
                >
                  <SelectTrigger className="border-royal/20 focus:border-royal">
                    <SelectValue placeholder="Choose a skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Adire">Adire making</SelectItem>
                    <SelectItem value="Pastries">Pastries</SelectItem>
                    <SelectItem value="Toiletries">
                      Toiletries production (liquid soap, bleach, air freshener,
                      toilet cleaner)
                    </SelectItem>
                    <SelectItem value="Makeup and gele tying">
                      Makeup and gele tying
                    </SelectItem>
                    <SelectItem value="Tailoring">
                      Tailoring (Not for beginners)
                    </SelectItem>
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

      {/* ✅ Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Registration Successful!</h2>
            <p className="mb-4">
              Thank you for registering for Royalty Ladies Conference 2025. We
              can't wait to see you there!
            </p>
            <button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-pink text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-dark transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
