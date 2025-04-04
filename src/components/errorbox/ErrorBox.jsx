import { useRouteError, Link, useNavigate } from 'react-router-dom';
import { FiAlertTriangle, FiRefreshCw, FiHome, FiChevronLeft } from 'react-icons/fi';

export default function ErrorBox() {
  const error = useRouteError();
  const navigate = useNavigate();
  
  console.error("Router Error Boundary caught:", error);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 sm:p-10 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 mb-6">
            <FiAlertTriangle className="h-8 w-8 text-amber-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getErrorTitle(error)}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {getErrorMessage(error)}
          </p>
          
          {error.status === 404 && (
            <div className="mb-8">
              <p className="text-gray-600">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left">
            <details className="cursor-pointer">
              <summary className="text-sm font-medium text-gray-500">
                Technical Details
              </summary>
              <pre className="mt-2 text-sm text-gray-800 overflow-x-auto">
                {JSON.stringify(error, null, 2)}
              </pre>
            </details>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiChevronLeft className="mr-2" />
              Go Back
            </button>
            
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700"
            >
              <FiRefreshCw className="mr-2" />
              Refresh Page
            </button>
            
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900"
            >
              <FiHome className="mr-2" />
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions to customize messages based on error type
function getErrorTitle(error) {
  if (error.status === 404) return 'Page Not Found';
  if (error.status === 401) return 'Unauthorized';
  if (error.status === 403) return 'Access Denied';
  if (error.status === 500) return 'Server Error';
  return 'Something Went Wrong';
}

function getErrorMessage(error) {
  if (error.status === 404) return "We couldn't find what you're looking for.";
  if (error.status === 401) return "Please log in to access this page.";
  if (error.status === 403) return "You don't have permission to view this content.";
  return "We're working to fix the issue. Please try again later.";
}