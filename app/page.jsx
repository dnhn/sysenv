import Link from 'next/link';

export default function Home() {
  return (
    <table>
      <tbody>
        <tr>
          <th colSpan={2} className="!py-8 !text-center">
            <h1 className="font-serif text-pretty">
              <Link
                href="https://vercel.com/docs/environment-variables/system-environment-variables"
                target="_blank"
                className="text-xl"
              >
                System environment variables
              </Link>
            </h1>
          </th>
        </tr>
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
          {process.env.VERCEL_URL && <td>{process.env.VERCEL_URL}</td>}
        </tr>
        <tr>
          <th>VERCEL_BRANCH_URL</th>
          {process.env.VERCEL_BRANCH_URL && <td>{process.env.VERCEL_BRANCH_URL}</td>}
        </tr>
        <tr>
          <th>VERCEL_PROJECT_PRODUCTION_URL</th>
          {process.env.VERCEL_PROJECT_PRODUCTION_URL && <td>{process.env.VERCEL_PROJECT_PRODUCTION_URL}</td>}
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
          {process.env.VERCEL_GIT_PROVIDER && <td>{process.env.VERCEL_GIT_PROVIDER}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_REPO_SLUG</th>
          {process.env.VERCEL_GIT_REPO_SLUG && <td>{process.env.VERCEL_GIT_REPO_SLUG}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_REPO_OWNER</th>
          {process.env.VERCEL_GIT_REPO_OWNER && <td>{process.env.VERCEL_GIT_REPO_OWNER}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_REPO_ID</th>
          {process.env.VERCEL_GIT_REPO_ID && <td>{process.env.VERCEL_GIT_REPO_ID}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_COMMIT_REF</th>
          {process.env.VERCEL_GIT_COMMIT_REF && <td>{process.env.VERCEL_GIT_COMMIT_REF}</td>}
        </tr>
        <tr>
          <th>VERCEL_GIT_COMMIT_SHA</th>
          {process.env.VERCEL_GIT_COMMIT_SHA && <td>{process.env.VERCEL_GIT_COMMIT_SHA}</td>}
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
        <tr>
          <th colSpan={2} className="!py-8 !text-center">
            <h1 className="font-serif text-pretty">
              <Link
                href="https://vercel.com/docs/environment-variables/reserved-environment-variables"
                target="_blank"
                className="text-xl"
              >
                Reserved environment variables
              </Link>
            </h1>
          </th>
        </tr>
        <tr>
          <th>AWS_SECRET_KEY</th>
          {process.env.AWS_SECRET_KEY && <td>{process.env.AWS_SECRET_KEY}</td>}
        </tr>
        <tr>
          <th>AWS_EXECUTION_ENV</th>
          {process.env.AWS_EXECUTION_ENV && <td>{process.env.AWS_EXECUTION_ENV}</td>}
        </tr>
        <tr>
          <th>AWS_LAMBDA_LOG_GROUP_NAME</th>
          {process.env.AWS_LAMBDA_LOG_GROUP_NAME && <td>{process.env.AWS_LAMBDA_LOG_GROUP_NAME}</td>}
        </tr>
        <tr>
          <th>AWS_LAMBDA_LOG_STREAM_NAME</th>
          {process.env.AWS_LAMBDA_LOG_STREAM_NAME && <td>{process.env.AWS_LAMBDA_LOG_STREAM_NAME}</td>}
        </tr>
        <tr>
          <th>AWS_LAMBDA_FUNCTION_NAME</th>
          {process.env.AWS_LAMBDA_FUNCTION_NAME && <td>{process.env.AWS_LAMBDA_FUNCTION_NAME}</td>}
        </tr>
        <tr>
          <th>AWS_LAMBDA_FUNCTION_MEMORY_SIZE</th>
          {process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE && <td>{process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE}</td>}
        </tr>
        <tr>
          <th>AWS_LAMBDA_FUNCTION_VERSION</th>
          {process.env.AWS_LAMBDA_FUNCTION_VERSION && <td>{process.env.AWS_LAMBDA_FUNCTION_VERSION}</td>}
        </tr>
        <tr>
          <th>NOW_REGION</th>
          {process.env.NOW_REGION && <td>{process.env.NOW_REGION}</td>}
        </tr>
        <tr>
          <th>TZ</th>
          {process.env.TZ && <td>{process.env.TZ}</td>}
        </tr>
        <tr>
          <th>LAMBDA_TASK_ROOT</th>
          {process.env.LAMBDA_TASK_ROOT && <td>{process.env.LAMBDA_TASK_ROOT}</td>}
        </tr>
        <tr>
          <th>LAMBDA_RUNTIME_DIR</th>
          {process.env.LAMBDA_RUNTIME_DIR && <td>{process.env.LAMBDA_RUNTIME_DIR}</td>}
        </tr>
        <tr>
          <th>AWS_ACCESS_KEY_ID</th>
          {process.env.AWS_ACCESS_KEY_ID && <td>{process.env.AWS_ACCESS_KEY_ID}</td>}
        </tr>
        <tr>
          <th>AWS_SECRET_ACCESS_KEY</th>
          {process.env.AWS_SECRET_ACCESS_KEY && <td>{process.env.AWS_SECRET_ACCESS_KEY}</td>}
        </tr>
        <tr>
          <th>AWS_SESSION_TOKEN</th>
          {process.env.AWS_SESSION_TOKEN && <td>{process.env.AWS_SESSION_TOKEN}</td>}
        </tr>
        <tr>
          <th>AWS_REGION</th>
          {process.env.AWS_REGION && <td>{process.env.AWS_REGION}</td>}
        </tr>
        <tr>
          <th>AWS_DEFAULT_REGION</th>
          {process.env.AWS_DEFAULT_REGION && <td>{process.env.AWS_DEFAULT_REGION}</td>}
        </tr>
      </tbody>
    </table>
  );
}
