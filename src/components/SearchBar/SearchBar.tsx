import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useState, type FormEvent } from "react";

interface SearchBarProps {
    onSubmit: (querry: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
    const [querry, setQuerry] = useState("");
function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const trimmed = querry.trim();
        if (!trimmed) {
            toast.error("Please enter your search query.");
            return;
        }
        onSubmit(trimmed);
        setQuerry("");
    }
    return (
        <header className={styles.header}>
          <div className={styles.container}>
            <a
              className={styles.link}
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by TMDB
            </a>
    
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="text"
                name="query"
                autoComplete="off"
                placeholder="Search movies..."
                autoFocus
                value={querry} 
                onChange={(e) => setQuerry(e.target.value)} 
              />
              <button className={styles.button} type="submit">
                Search
              </button>
            </form>
          </div>
        </header>
      );
    
}