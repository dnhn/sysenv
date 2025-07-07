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
        <tr>
          <th>VERCEL</th>
          {process.env.VERCEL && <td>{process.env.VERCEL}</td>}
        </tr>
        <tr>
          <th>CI</th>
          {process.env.CI && <td>{process.env.CI}</td>}
        </tr>
        <tr>
          <th>VERCEL_ENV</th>
          {process.env.VERCEL_ENV && <td>{process.env.VERCEL_ENV}</td>}
        </tr>
        <tr>
          <th>VERCEL_TARGET_ENV</th>
          {process.env.VERCEL_TARGET_ENV && <td>{process.env.VERCEL_TARGET_ENV}</td>}
        </tr>
        <tr>
          <th>VERCEL_URL</th>
          {process.env.VERCEL_URL && <td><Link href={`https://${process.env.VERCEL_URL}`}>{process.env.VERCEL_URL}</Link></td>}
        </tr>
        <tr>
          <th>VERCEL_BRANCH_URL</th>
          {process.env.VERCEL_BRANCH_URL && (
            <td><Link href={`https://${process.env.VERCEL_BRANCH_URL}`}>{process.env.VERCEL_BRANCH_URL}</Link></td>
          )}
        </tr>
        <tr>
          <th>VERCEL_PROJECT_PRODUCTION_URL</th>
          {process.env.VERCEL_PROJECT_PRODUCTION_URL && (
            <td>
              <Link href={`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`}>{process.env.VERCEL_PROJECT_PRODUCTION_URL}</Link>
            </td>
          )}
        </tr>
        <tr>
          <th>VERCEL_REGION</th>
          {process.env.VERCEL_REGION && <td>{process.env.VERCEL_REGION}</td>}
        </tr>
        <tr>
          <th>VERCEL_DEPLOYMENT_ID</th>
          {process.env.VERCEL_DEPLOYMENT_ID && <td>{process.env.VERCEL_DEPLOYMENT_ID}</td>}
        </tr>
        <tr>
          <th>VERCEL_PROJECT_ID</th>
          {process.env.VERCEL_PROJECT_ID && <td>{process.env.VERCEL_PROJECT_ID}</td>}
        </tr>
        <tr>
          <th>VERCEL_SKEW_PROTECTION_ENABLED</th>
          {process.env.VERCEL_SKEW_PROTECTION_ENABLED && <td>{process.env.VERCEL_SKEW_PROTECTION_ENABLED}</td>}
        </tr>
        <tr>
          <th>VERCEL_AUTOMATION_BYPASS_SECRET</th>
          {process.env.VERCEL_AUTOMATION_BYPASS_SECRET && <td>{process.env.VERCEL_AUTOMATION_BYPASS_SECRET}</td>}
        </tr>
        <tr>
          <th>VERCEL_OIDC_TOKEN</th>
          {process.env.VERCEL_OIDC_TOKEN && <td>{process.env.VERCEL_OIDC_TOKEN}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_PROVIDER</th>
          {process.env.VERCEL_GIT_PROVIDER && (
            <td>
              <Link href={`https://${process.env.VERCEL_GIT_PROVIDER}.com`} target="_blank">{process.env.VERCEL_GIT_PROVIDER}</Link>
            </td>
          )}
        </tr>
        <tr>
          <th>VERCEL_GIT_REPO_SLUG</th>
          {process.env.VERCEL_GIT_REPO_SLUG && (
            <td>
              <Link href={`https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`} target="_blank">
                {process.env.VERCEL_GIT_REPO_SLUG}
              </Link>
            </td>
          )}
        </tr>
        <tr>
          <th>VERCEL_GIT_REPO_OWNER</th>
          {process.env.VERCEL_GIT_REPO_OWNER && (
            <td>
              <Link href={`https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}`} target="_blank">
                {process.env.VERCEL_GIT_REPO_OWNER}
              </Link>
            </td>
          )}
        </tr>
        <tr>
          <th>VERCEL_GIT_REPO_ID</th>
          {process.env.VERCEL_GIT_REPO_ID && <td>{process.env.VERCEL_GIT_REPO_ID}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_COMMIT_REF</th>
          {process.env.VERCEL_GIT_COMMIT_REF && (
            <td>
              <Link
                href={`https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}/tree/${process.env.VERCEL_GIT_COMMIT_REF}`}
                target="_blank"
              >
                {process.env.VERCEL_GIT_COMMIT_REF}
              </Link>
            </td>
          )}
        </tr>
        <tr>
          <th>VERCEL_GIT_COMMIT_SHA</th>
          {process.env.VERCEL_GIT_COMMIT_SHA && (
            <td>
              <Link
                href={`https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`}
                target="_blank"
              >
                {process.env.VERCEL_GIT_COMMIT_SHA}
              </Link>
            </td>
          )}
        </tr>
        <tr>
          <th>VERCEL_GIT_COMMIT_MESSAGE</th>
          {process.env.VERCEL_GIT_COMMIT_MESSAGE && <td>{process.env.VERCEL_GIT_COMMIT_MESSAGE}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_COMMIT_AUTHOR_LOGIN</th>
          {process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN && <td>{process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_COMMIT_AUTHOR_NAME</th>
          {process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME && <td>{process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_PREVIOUS_SHA</th>
          {process.env.VERCEL_GIT_PREVIOUS_SHA && <td>{process.env.VERCEL_GIT_PREVIOUS_SHA}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_PULL_REQUEST_ID</th>
          {process.env.VERCEL_GIT_PULL_REQUEST_ID && <td>{process.env.VERCEL_GIT_PULL_REQUEST_ID}</td>}
        </tr>
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
