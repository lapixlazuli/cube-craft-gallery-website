import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram, MessageSquare, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project Started!",
      description: "We'll respond within 24 hours with next steps.",
    });
    // Reset form
    setFormData({ name: "", email: "", message: "", file: null });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              Got an <span className="text-neon-pink">idea</span>?{" "}
              <span className="text-neon-cyan">Let's make it real</span> in 3D
            </h2>
            <p className="text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto">
              Tell us about your idea, and we'll help print it into existence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 border-2 hover:border-neon-pink transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-montserrat">
                  Start Your Project
                </CardTitle>
                <CardDescription className="font-montserrat">
                  Share your vision and we'll bring it to life with precision 3D printing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-montserrat font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 border-2 focus:border-neon-pink font-montserrat"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-montserrat font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 border-2 focus:border-neon-pink font-montserrat"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-montserrat font-medium">
                      Project Description *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 border-2 focus:border-neon-pink font-montserrat min-h-[120px]"
                      placeholder="Describe your idea, dimensions, materials, and any specific requirements..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="file" className="font-montserrat font-medium">
                      Attach Files (Optional)
                    </Label>
                    <div className="mt-1 flex items-center space-x-4">
                      <Input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        className="border-2 focus:border-neon-pink font-montserrat"
                        accept=".jpg,.jpeg,.png,.pdf,.stl,.obj"
                      />
                      <Upload className="text-muted-foreground" size={20} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 font-montserrat">
                      Upload sketches, 3D models, or reference images
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full font-montserrat font-semibold"
                  >
                    Start Project
                  </Button>
                </form>

                <p className="text-sm text-center text-muted-foreground mt-4 font-montserrat">
                  We usually respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-neon-cyan transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="text-neon-pink" size={24} />
                    <h3 className="font-bold font-montserrat">Email Us</h3>
                  </div>
                  <p className="text-muted-foreground font-montserrat">
                    hello@3dimensionlabs.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-violet transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Instagram className="text-neon-cyan" size={24} />
                    <h3 className="font-bold font-montserrat">Follow Us</h3>
                  </div>
                  <p className="text-muted-foreground font-montserrat mb-2">
                    @3dimensionlabs
                  </p>
                  <p className="text-sm text-muted-foreground font-montserrat">
                    See our latest projects and behind-the-scenes content
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-neon-pink transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="text-blue-violet" size={24} />
                    <h3 className="font-bold font-montserrat">TikTok</h3>
                  </div>
                  <p className="text-muted-foreground font-montserrat mb-2">
                    @3dimensionlabs
                  </p>
                  <p className="text-sm text-muted-foreground font-montserrat">
                    E aí, qual é a sua ideia?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;