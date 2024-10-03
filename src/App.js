import UserFinder from './components/UserFinder';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <UserFinder />
      </div>
    </ErrorBoundary>
  );
}

export default App;
