import { Geist_Mono } from 'next/font/google';
import Link from 'next/link';

export default function Home() {
  return (
    <table>
      <caption className="py-8 px-4">
        <h1 className="font-black text-pretty">
          <Link
            href="https://vercel.com/docs/environment-variables/system-environment-variables"
            target="_blank"
            className="text-xl"
          >
            Vercel’s system environment variables
          </Link>
        </h1>
      </caption>
      <tbody className={geistMono.className}>
        {ENV.map((env) => (
          <tr key={env.name}>
            <th>{env.name}</th>
            {env.value && (
              <td>
                {env.href ? (
                  <Link href={env.href} target={env.external ? '_blank' : undefined}>{env.value}</Link>
                ) : (
                  env.value
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2} className="py-8 px-4">
            <div className="flex gap-4 items-center justify-center text-sm font-bold">
              <Link href="https://nhan.dev" target="_blank">nhan.dev</Link>
              <Link href="https://github.com/dnhn/sysenv.now.sh" target="_blank">GitHub</Link>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

const geistMono = Geist_Mono({
  subsets: ['latin'],
});

const ENV = [
  { name: 'VERCEL', value: process.env.VERCEL },
  { name: 'CI', value: process.env.CI },
  { name: 'VERCEL_ENV', value: process.env.VERCEL_ENV },
  { name: 'VERCEL_TARGET_ENV', value: process.env.VERCEL_TARGET_ENV },
  { href: `https://${process.env.VERCEL_URL}`, name: 'VERCEL_URL', value: process.env.VERCEL_URL },
  { href: `https://${process.env.VERCEL_BRANCH_URL}`, name: 'VERCEL_BRANCH_URL', value: process.env.VERCEL_BRANCH_URL },
  { href: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`, name: 'VERCEL_PROJECT_PRODUCTION_URL', value: process.env.VERCEL_PROJECT_PRODUCTION_URL },
  { name: 'VERCEL_REGION', value: process.env.VERCEL_REGION },
  { name: 'VERCEL_DEPLOYMENT_ID', value: process.env.VERCEL_DEPLOYMENT_ID },
  { name: 'VERCEL_PROJECT_ID', value: process.env.VERCEL_PROJECT_ID },
  { name: 'VERCEL_SKEW_PROTECTION_ENABLED', value: process.env.VERCEL_SKEW_PROTECTION_ENABLED },
  { name: 'VERCEL_AUTOMATION_BYPASS_SECRET', value: process.env.VERCEL_AUTOMATION_BYPASS_SECRET },
  { name: 'VERCEL_OIDC_TOKEN', value: process.env.VERCEL_OIDC_TOKEN },
  { external: true, href: `https://${process.env.VERCEL_GIT_PROVIDER}.com`, name: 'VERCEL_GIT_PROVIDER', value: process.env.VERCEL_GIT_PROVIDER },
  { external: true, href: `https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`, name: 'VERCEL_GIT_REPO_SLUG', value: process.env.VERCEL_GIT_REPO_SLUG },
  { external: true, href: `https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}`, name: 'VERCEL_GIT_REPO_OWNER', value: process.env.VERCEL_GIT_REPO_OWNER },
  { name: 'VERCEL_GIT_REPO_ID', value: process.env.VERCEL_GIT_REPO_ID },
  { external: true, href: `https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}/tree/${process.env.VERCEL_GIT_COMMIT_REF}`, name: 'VERCEL_GIT_COMMIT_REF', value: process.env.VERCEL_GIT_COMMIT_REF },
  { external: true, href: `https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`, name: 'VERCEL_GIT_COMMIT_SHA', value: process.env.VERCEL_GIT_COMMIT_SHA },
  { name: 'VERCEL_GIT_COMMIT_MESSAGE', value: process.env.VERCEL_GIT_COMMIT_MESSAGE },
  { name: 'VERCEL_GIT_COMMIT_AUTHOR_LOGIN', value: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN },
  { name: 'VERCEL_GIT_COMMIT_AUTHOR_NAME', value: process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME },
  { name: 'VERCEL_GIT_PREVIOUS_SHA', value: process.env.VERCEL_GIT_PREVIOUS_SHA },
  { name: 'VERCEL_GIT_PULL_REQUEST_ID', value: process.env.VERCEL_GIT_PULL_REQUEST_ID },
]
