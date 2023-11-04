import { currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <p className="text-muted-foreground">
        This is page only for logged users
      </p>
      <p className="text-xl">Hello there {user?.firstName}</p>
    </div>
  );
}
