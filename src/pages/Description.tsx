import { useState } from "react";
import "./Description.css";

interface DescriptionProps {
  anime: {
    mal_id: number;
    title: string;
    score: number;
    episodes: number;
    year: number;
    trailer: {
      embed_url: string;
    };
    images: {
      webp: {
        large_image_url: string;
      };
    };
    synopsis: string;
    type: string;
    name: string;
  };
}

function Description({ anime }: DescriptionProps) {
  return (
    <>
      <section className="all">
        <div className="close-button">✕</div>

        <section className="hero">
          <img src={anime.images.webp.large_image_url} alt={anime.title} />
          <div className="hero-gradient" />
        </section>

        <section className="description-block">
          <div className="description-top">
            <p>▶ Bande-annonce</p>
            {anime.trailer.embed_url == null ? (
              <p>indisponible :/</p>
            ) : (
              <iframe
                src={anime.trailer.embed_url}
                title={`Trailer de ${anime.title}`}
                className="trailer-video"
                width="100%"
                height="400"
                allowFullScreen
              />
            )}

            <div className="rating-box">
              <span>★★★★☆</span>
            </div>

            <button className="btn-add" type="button">
              Ajouter à ma liste ➕
            </button>
          </div>

          <div className="rating-info">
            <span className="rating-text">
              Noté <strong>{anime.score}</strong> par nos utilisateurs
            </span>
            <span className="separator">|</span>
            <span>{anime.year}</span>
            <span className="separator">|</span>
            <span>13+</span>
            <span className="separator">|</span>
            <span>{anime.episodes}</span>
          </div>

          <div className="description-content">
            <div className="left">
              <p>{anime.synopsis}</p>
            </div>
            <div className="right">
              <p>
                <strong style={{ color: "#733597" }}>Distribution:</strong>{" "}
                Mayumi Tanaka, Kazuya Nakai, Akemi Okamura, Kappei Yamaguchi...
              </p>
              <p>
                <strong style={{ color: "#733597" }}>Genre:</strong> Action,
                Aventure, Fantastique, Comédie
              </p>
              <p>
                <strong style={{ color: "#733597" }}>Thèmes:</strong> Piraterie,
                Liberté, Amitié, Héritage, Justice...
              </p>
            </div>
          </div>

          <button className="btn-avis" type="button">
            💬 Avis <span className="badge">27</span>
          </button>
        </section>
      </section>
    </>
  );
}

export default Description;
