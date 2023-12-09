import { SignUp } from '@clerk/nextjs';

import { routes } from '@/lib/routes';

export default function SignUpPage({
  searchParams,
}: {
  searchParams: { redirect_url?: string };
}) {
  const afterSignUpUrl = searchParams.redirect_url || routes.index();

  return (
    <div className="flex flex-1 items-center justify-center">
      <SignUp afterSignUpUrl={afterSignUpUrl} />
    </div>
  );
}
