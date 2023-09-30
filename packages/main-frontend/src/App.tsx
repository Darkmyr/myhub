import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work

const Header = lazy(() => import('MiniApp/Header'));

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
    <div style={{backgroundColor: "red", display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center', color: "white"}}>
      I'm from the main app
    </div>
    </>
  );
}

export default App;
