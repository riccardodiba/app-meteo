import Form from "react-bootstrap/Form";
import { Row, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import CardWeather from "./CardWeather";
import { useEffect } from "react";
import { useState } from "react";

function MyMain() {
  const [searchData, setWeatherData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (searchValue.trim() !== "") {
          let resp = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=550f0549a3398d92fb6ec6afa229d185`
          );
          if (resp.ok) {
            let data = await resp.json();
            console.log(data);
            setWeatherData(data);
          } else {
            console.log("error");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
  }, [searchValue]);

  return (
    <Container className="d-flex flex-column ">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form.Group>
            <Form.Control
              className=" p-1 fs-5 mt-4 "
              type="search"
              placeholder="Search City"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          {searchData.length > 0 && <CardWeather latandlong={searchData[0]} />}
        </Col>
      </Row>
    </Container>
  );
}
export default MyMain;