import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PizzaDataHandler } from './components/PizzaDataHandler/PizzaDataHandler';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 min-h-screen">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense
          fallback={<div className="dark:text-white">Loading...</div>}
        >
          <PizzaDataHandler />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;