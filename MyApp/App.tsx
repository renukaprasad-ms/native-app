import AppNavigator from './src/app/AppNavigator';
import ThemeProvider from './src/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

export default App;
