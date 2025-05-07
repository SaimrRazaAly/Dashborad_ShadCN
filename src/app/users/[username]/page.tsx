import CardList from "@/components/CardList";
import Mini_Navigator from "@/components/mini_comp/Mini_Navigator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BadgeCheck } from "lucide-react";

interface SingleUserProps {
  params: {
    username: Promise<string>;
  };
}

const SingleUser = async ({ params }: SingleUserProps) => {
  const username = await params.username;
  return (
    <div>
      <Mini_Navigator username={username} />
      {/* CONTAIENR */}
      <div className="flex flex-col xl:flex-row gap-8 mt-4">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="p-4 rounded-lg bg-primary-foreground">
            {/* USER BADGE */}
            <h2 className="text-xl font-semibold">User Badge</h2>

            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border  border-blue-500/50 p-2"/>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Verified User</h1>
                  <p className=" text-sm text-muted-foreground">This user has been Verified by the admin</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-primary-foreground">
            {/* INFORMATION */}
            INFO
          </div>

          <div className="p-4 rounded-lg bg-primary-foreground">
            {/* CARDLIST */}
            <CardList title="Recent Transtion" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="p-4 rounded-lg bg-primary-foreground">USER CARD</div>

          <div className="p-4 rounded-lg bg-primary-foreground">CHARTS</div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
