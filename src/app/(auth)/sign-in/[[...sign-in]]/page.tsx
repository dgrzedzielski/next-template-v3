import { SignIn } from '@clerk/nextjs';

import { routes } from '@/lib/routes';

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { redirect_url?: string };
}) {
  const afterSignInUrl = searchParams.redirect_url || routes.index();

  return (
    <div className="flex flex-1 items-center justify-center">
      <SignIn afterSignInUrl={afterSignInUrl} />
    </div>
  );
}
