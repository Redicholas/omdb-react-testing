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
    <div>
      <form id="searchMovies" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" onChange={props.onChange} />
          <button onClick={props.onSearch}>Search</button>
      </form>
    </div>
  );
}