import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import {Wind,ThermometerHalf,ThermometerHigh,Sunrise,Sunset,GeoAlt}  from "react-bootstrap-icons"

function CardWeather(props) {
  const [weatherData, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (props.latandlong) {
          setLoading(false);
          let resp = await fetch(
           
            `https://api.openweathermap.org/data/2.5/weather?lat=${props.latandlong.lat}&lon=${props.latandlong.lon}&appid=550f0549a3398d92fb6ec6afa229d185&units=metric`
          );
          if (resp.ok) {
            let data = await resp.json();
            console.log(data);
            setWeather(data);
          } else {
            console.log("error fetching weather");
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (props.latandlong) {
      fetchWeather();
    }
  }, [props.latandlong]);

  const SunsetTime = weatherData ? weatherData.sys.sunset : null;
  const setdate = SunsetTime ? new Date(SunsetTime * 1000) : null;
  const sethours = setdate ? setdate.getHours() : null;
  const setminutes = setdate ? setdate.getMinutes() : null;
  
   
  const SunriseTime = weatherData ? weatherData.sys.sunrise : null;
  const risedate = SunriseTime ? new Date(SunriseTime * 1000) : null;
  const risehours = risedate ? risedate.getHours() : null;
  const riseminutes = risedate ? risedate.getMinutes() : null;

  

  return (
    <Container className="my-5 ">
      <Row>
        <Col>
          <Card>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
            ) : 
            weatherData ? (
              <div>
                <Card.Body className= "text-start" style={{ backgroundColor: '#faea01' }}>
                          <Card.Img variant="top"   src="assest/logo.png"
            alt="logo"
            style={{ width: '50px', height: '55px' }}
             
          />

                  <Card.Title className=" text-dark fs-2  p-1 ">
                    {weatherData.name} {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()} <GeoAlt className="text-dark ms-2" />
                  </Card.Title>
                  <Card.Text className="fs-3 me-5">
                    {weatherData.weather[0].main}{" "}
                  </Card.Text>
                  <Card.Text className="fs-5  me-5">
                    {weatherData.weather[0].description}
                  </Card.Text>
                  <Card.Text className="fs-5">
                    Temperature Min {weatherData.main.temp_min}°C <ThermometerHalf  className="text-dark ms-2" />
                  </Card.Text>
                   <Card.Text className="fs-5">
                    Temperature Max {weatherData.main.temp_max}°C <ThermometerHigh className="text-dark ms-2" />
                  </Card.Text>
                   <Card.Text className="fs-5">
                   Wind {weatherData.wind.speed}Km/h <Wind className="text-dark ms-2" />
                  </Card.Text>
                  <Row className=" fs-5">
                    <Col >
                      
                    Sunrise at {risehours}:{riseminutes} <Sunrise className="text-dark ms-2" />
                    </Col>
                    <Col >
                    
                    Sunset at {sethours}:{setminutes} < Sunset className="text-dark ms-2" />
                    </Col>
                  </Row>
                </Card.Body>
              </div>
            ) : null}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardWeather;