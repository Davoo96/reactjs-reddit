import PostsView from "./components/postsView";

function App() {
  return (
    <>
      <header className="bg-primary text-center py-6">
        <h2 className="text-white font-bold text-4xl uppercase leading-normal">
          React<span className="text-feedback-warning">JS</span>
        </h2>
      </header>
      <main>
        <PostsView />
      </main>
    </>
  );
}

export default App;
