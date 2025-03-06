import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Spinner, Alert } from "react-bootstrap";

const GetEmprunts = () => {
  const [emprunts, setEmprunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effectue un GET sur l'API fournie
    axios
      .get("http://195.15.236.51/api/emprunts")
      .then((response) => {
        // Supposons que la réponse soit un tableau d'objets emprunt
        setEmprunts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Erreur : {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Liste des emprunts</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Date d'emprunt</th>
            <th>Date de retour</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {emprunts.map((emprunt) => (
            <tr key={emprunt.id}>
              <td>{emprunt.id}</td>
              <td>{emprunt.userId}</td>
              <td>{emprunt.dateEmprunt}</td>
              <td>{emprunt.dateRetour || "-"}</td>
              <td>{emprunt.statut}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GetEmprunts;
