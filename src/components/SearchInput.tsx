import { ChangeEvent } from "react";

interface SearchInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function SearchInput(props: SearchInputProps) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="p-10 border w-full flex justify-center">
      <form id="searchMovies" onSubmit={handleSubmit} className="flex gap-6">
          <input type="text" placeholder="Search" onChange={props.onChange}
            className="py-4 px-6 w-72 border hover:bg-slate-200 hover:cursor-text rounded" />
          <button onClick={props.onSearch}
            className="border py-4 px-12 hover:bg-slate-200 rounded">Search</button>
      </form>
    </div>
  );
}