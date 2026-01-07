import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Download, Linkedin } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


export default function About() {
    const skills = ["React", "TypeScript", "Tailwind CSS", "Next.js", "Shadcn UI", "Node.js", "Python", "Django", "Git", "Docker", "AWS", "Data Structures", "Algorithms"];

    return (
        <div className="max-w-4xl mx-auto space-y-16 py-10 animate-in fade-in slide-in-from-bottom-5 duration-700">

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1 space-y-4 text-center md:text-left">
                    <Badge variant="outline" className="text-primary border-primary px-3 py-1">
                        Full Stack Developer
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Hi, my name is <span className="text-primary">Sung</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        I build modern web applications with smooth user experiences and clean code.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 pt-2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="gap-2">
                                    View CV <ExternalLink size={16} />
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="max-w-6xl h-[80vh] p-0">
                                <DialogHeader className="p-4 border-b">
                                    <DialogTitle>Curriculum Vitae</DialogTitle>
                                </DialogHeader>
                                <iframe
                                    src="/cv/Phan_Duc_Sung_Resume.pdf"
                                    className="w-full h-full"
                                    title="CV Preview"
                                />

                                <div className="flex justify-end gap-2 p-4 border-t">
                                    <Button asChild variant="outline" className="gap-2">
                                        <a href="/cv/Phan_Duc_Sung_Resume.pdf" download="SungPhan-CV.pdf">
                                            <Download size={16} />
                                            Download
                                        </a>
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary to-purple-600 blur opacity-25"></div>

                        <img
                            src="/avatar/avatar.jpg"
                            alt="Profile"
                            className="relative h-64 w-64 rounded-full object-cover border-2 border-background shadow-2xl
               md:h-80 md:w-80"
                        />
                    </div>

                </div>
            </section>
            <section className="space-y-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg">
                    I used to study at VNU-HCM University of Science with a strong focus on backend web development. I work primarily with Node.js and Python, using frameworks like Express.js and Django, and have a basic understanding of HTML, CSS, and JavaScript. I’m passionate about building reliable web solutions and continuously expanding my skills through exploring cloud computing, DevOps, and artificial intelligence. I also run a TikTok channel called <a href="https://www.tiktok.com/@thelazycode_r" target="_blank">thelazycode_r</a> where I create content about programming and tech to help others on their learning journey.
                </div>
            </section>
            <section className="space-y-6">
                <h2 className="text-3xl font-bold">Favorite Technologies</h2>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <Badge key={skill} className="px-4 py-2 text-sm font-medium">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </section>

            <section className="pt-10 border-t flex flex-col items-center gap-6">
                <h3 className="text-xl font-semibold">Find me on social media</h3>
                <div className="flex gap-6 text-muted-foreground">
                    <a href="https://github.com/sung2708" className="hover:text-primary transition-colors"><Github size={28} /></a>
                    <a href="https://www.linkedin.com/in/sungpd/" className="hover:text-primary transition-colors"><Linkedin size={28} /></a>
                </div>
            </section>
        </div>
    );
}