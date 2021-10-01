import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import Player from "react-howler-player";
import { GrMusic } from "react-icons/gr";

function Main() {
  const [url, setURL] = useState("");
  const handleChangeInput = (e) => {
    setURL(e.target.value);
  };

  const handleAudioSearch = (e) => {
    e.preventDefault();
    console.log(url);
  };

  return (
    <Container
      style={{
        marginLeft: "20%",
        marginTop: "2%",
      }}
    >
      <div
        className="input-group col-md-4"
        style={{
          width: "90%",
        }}
      >
        <input
          className="form-control py-2 border-right-0 border"
          type="search"
          id="example-search-input"
          placeholder="Search audio file from an external URL"
          onChange={handleChangeInput}
        />
        <span
          className="input-group-append"
          onClick={(e) => handleAudioSearch(e)}
        >
          <div className="btn btn-outline-secondary border-left-0 border">
            <GrMusic />
          </div>
        </span>
      </div>

      <div
        style={{
          width: "90%",
          marginTop: "30px",
        }}
      >
        <h3>Playlist Name - </h3>
      </div>
      <div
        style={{
          width: "90%",
          marginTop: "30px",
        }}
      >
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Songs Name / Artist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div
        style={{
          width: "76%",
          bottom: "25px",
          position: "fixed",
        }}
      >
        <Player
          src={["http://goldfirestudios.com/proj/howlerjs/sound.ogg"]}
          isDark={true}
        />
      </div>
    </Container>
  );
}

export default Main;
