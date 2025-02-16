import { Container, Button } from "react-bootstrap";

export default function JoinSection() {
  return (
    <section style={{
      backgroundColor: "#031122", // Dark navy background
      padding: "60px 0",
      textAlign: "center",
      color: "#ffffff",
      fontFamily: "Montserrat, sans-serif"
    }}>
      <Container>
        {/* Heading */}
        <h2 style={{
          fontSize: "38px",
          fontWeight: "700",
          marginBottom: "20px",
          lineHeight: "1.4"
        }}>
          Rejoignez nos <span style={{ fontWeight: "800" }}>14 618 membres</span> qui lancent<br />
          leur business avec Createur.com
        </h2>

        {/* Button */}
        <Button
          href="#" // Change this to your signup URL
          style={{
            backgroundColor: "#ff0066", // Pink color
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "600",
            padding: "12px 30px",
            marginTop: "10px",
            display: "inline-flex",
            alignItems: "center"
          }}
        >
          Acces  →
        </Button>
      </Container>
    </section>
  );
}
