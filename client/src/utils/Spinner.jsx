import React from "react";

function Spinner({ loading }) {
  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9998,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "5px solid #0b5ed7",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <span
          style={{
            display: "block",
            fontSize: "20px",
            marginTop: "10px",
            color: "#fff",
          }}
        >
          Enviando...
        </span>
      </div>

      {/* Animación CSS */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Spinner;
