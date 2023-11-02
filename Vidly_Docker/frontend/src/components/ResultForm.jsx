import React, { useEffect, useState } from "react";
import Input from "./Input";

function ResultForm({onSearchTitle, searchResult}) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => setTitle(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    onSearchTitle(title);
  };
  var response = ""
  if(searchResult.movie != null && searchResult.serie){
    response = `${searchResult.movie.title} está nós dois.`;
  }else if (searchResult.movie != null){
    response = `O filme ${searchResult.movie.title} está em filme.`;
  }else if(searchResult.serie){
    response = `A série ${searchResult.serie.title} está em série.`;
  }else{
    response = `${title} não tem em nenhum dos dois.`;
  }

  useEffect(()=>onSearchTitle(title), [title]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
        aria-label="Database Search"
        onChange={handleChange}
        placeholder="busque um filme ou série"
        type="text"
        />
      </form>
      <h3>
        {response}
      </h3>
    </div>
  )
}

export default ResultForm;