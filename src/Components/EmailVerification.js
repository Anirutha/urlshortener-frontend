import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function EmailVerification() {
  const param = useParams();
  const [validUrl, setValidUrl] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `http://localhost:9030/api/signup/users/${param.id}/verify/${param.token}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setValidUrl(true);
        setMessage(data.message);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyEmail();
  }, [param]);

  return (
    <div>
      <h1>Email Verification</h1>
      {validUrl && message ? (
        <div>
          <h1>{message}</h1>
        </div>
      ) : (
        <div>
          <h1>{message}</h1>
        </div>
      )}
    </div>
  );
}