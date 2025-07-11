"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  BookOpen, 
  ChartBar, 
  Lightbulb,
  Share2,
  Award,
  ArrowRight,
  Plus,
  Filter
} from "lucide-react";

const FundraisingHub = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Insights",
      description: "Learn from proven fundraising strategies and avoid common pitfalls"
    },
    {
      icon: TrendingUp,
      title: "Outcome Tracking",
      description: "See real results and ROI data from various fundraising approaches"
    },
    {
      icon: Users,
      title: "Community Wisdom",
      description: "Access collective knowledge from experienced mission fundraisers"
    },
    {
      icon: ChartBar,
      title: "Performance Analytics",
      description: "Compare techniques and identify what works best for your context"
    }
  ];

  const recentContributions = [
    {
      title: "Social Media Campaign Success",
      category: "Digital Marketing",
      outcome: "150% of goal reached",
      author: "Sarah M.",
      impact: "High"
    },
    {
      title: "Community Event Fundraiser",
      category: "Event Planning",
      outcome: "85% participation rate",
      author: "David L.",
      impact: "Medium"
    },
    {
      title: "Corporate Partnership Strategy",
      category: "Partnerships",
      outcome: "$50k secured",
      author: "Maria R.",
      impact: "High"
    }
  ];

  const categories = [
    "Digital Marketing",
    "Event Planning", 
    "Grant Writing",
    "Corporate Partnerships",
    "Community Outreach",
    "Online Campaigns",
    "Traditional Media",
    "Donor Relations"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Mission Fundraising Hub</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Browse</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contribute</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Analytics</a>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Fundraising Knowledge Repository</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Learn from Every
            <span className="text-primary"> Mission</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access proven fundraising strategies, learn from real outcomes, and avoid costly mistakes. 
            Build your next mission on the foundation of collective wisdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Explore Knowledge Base
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Plus className="w-5 h-5 mr-2" />
              Share Your Experience
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search fundraising strategies, outcomes, techniques..." 
              className="pl-12 py-6 text-lg border-2 border-border hover:border-primary/50 focus:border-primary transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Mission Leaders Trust Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Turn fundraising challenges into opportunities with data-driven insights and proven strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
              <p className="text-muted-foreground">Find strategies specific to your fundraising approach</p>
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              All Categories
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 py-3 text-center justify-center hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Contributions */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Recent Contributions</h2>
              <p className="text-muted-foreground">Latest insights from the community</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentContributions.map((contribution, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{contribution.category}</Badge>
                    <Badge variant={contribution.impact === 'High' ? 'default' : 'secondary'}>
                      {contribution.impact} Impact
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{contribution.title}</CardTitle>
                  <CardDescription>by {contribution.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-success font-medium">
                    <Award className="w-4 h-4" />
                    <span>{contribution.outcome}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="gradient-primary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fundraising?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join hundreds of mission leaders who have improved their fundraising outcomes through shared knowledge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Exploring
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Share2 className="w-5 h-5 mr-2" />
                Contribute Knowledge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold">Mission Fundraising Hub</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering mission organizations through shared fundraising knowledge and proven strategies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary transition-colors">Browse Knowledge</a>
                <a href="#" className="block hover:text-primary transition-colors">Success Stories</a>
                <a href="#" className="block hover:text-primary transition-colors">Best Practices</a>
                <a href="#" className="block hover:text-primary transition-colors">Analytics</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary transition-colors">Contribute</a>
                <a href="#" className="block hover:text-primary transition-colors">Guidelines</a>
                <a href="#" className="block hover:text-primary transition-colors">Forum</a>
                <a href="#" className="block hover:text-primary transition-colors">Events</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-primary transition-colors">Help Center</a>
                <a href="#" className="block hover:text-primary transition-colors">Contact Us</a>
                <a href="#" className="block hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mission Fundraising Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FundraisingHub;