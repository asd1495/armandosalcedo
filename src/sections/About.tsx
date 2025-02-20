import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems, toolboxItems } from "@/components/ToolboxItems";
import { hobbies } from "@/components/Hobbies";

export const AboutSection = () => {
  return (
    <div id="about-section" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into Myself" 
          description="Learn more about who I am, what I do, and what inspires me." 
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="h-[320px]">
              <CardHeader 
                title="Who Am I?" 
                description="I am a versatile software developer with a solid foundation in communication and teamwork. Currently, I am further enhancing my technical expertise by pursuing a degree in Computer Engineering, blending creative and technical skills to deliver innovative solutions." 
              />
            </Card>
            <Card className="h-[320px]">
              <CardHeader 
                title="My Toolbox" 
                description="The technologies and tools I work with"
              />
              <ToolboxItems 
                items={toolboxItems} 
                className="mt-6"
                itemsWrapperClassname="-translate-x-1/2 animate-slide" 
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            <Card className="h-[320px] p-0 flex-col">
              <CardHeader
                title="Beyond the code"
                description="Explore my hobbies and interests"
                className="px-6 py-6"
              />
              <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {hobbies.map(hobby => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center justify-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full py-1.5"
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
