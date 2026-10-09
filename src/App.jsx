import {
  MapPin,
  Mail,
  Users,
  BriefcaseBusiness,
  Code,
} from "lucide-react";

import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card";

import {
Avatar,
AvatarFallback,
AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "./App.css";

function App() {
return ( <main className="page"> <Card className="profile-card"> <div className="cover"></div>

```
    <CardHeader className="profile-header">
      <Avatar className="profile-avatar">
        <AvatarImage
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
          alt="Profile"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <Badge className="available">Available for work</Badge>

      <CardTitle className="profile-name">John Doe</CardTitle>
      <CardDescription className="profile-role">
        Frontend Developer
      </CardDescription>

      <p className="location">
        <MapPin size={16} />
        Karachi, Pakistan
      </p>
    </CardHeader>

    <CardContent>
      <p className="bio">
        Passionate frontend developer who loves building clean, modern,
        and user-friendly web experiences with React.
      </p>

      <div className="skills">
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">JavaScript</Badge>
        <Badge variant="secondary">Tailwind CSS</Badge>
        <Badge variant="secondary">Shadcn UI</Badge>
      </div>

      <div className="stats">
        <div>
          <h3>12</h3>
          <p>Projects</p>
        </div>
        <div>
          <h3>2+</h3>
          <p>Years Learning</p>
        </div>
        <div>
          <h3>8</h3>
          <p>Skills</p>
        </div>
      </div>

      <div className="profile-buttons">
        <Button className="contact-button" asChild>
          <a href="mailto:hello@example.com">
            <Mail size={17} />
            Contact Me
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code size={18} />
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Users size={18} />
          </a>
        </Button>
      </div>

      <div className="portfolio-link">
        <BriefcaseBusiness size={16} />
        <span>Frontend Development Portfolio</span>
      </div>
    </CardContent>
  </Card>
</main>
);
}

export default App;
