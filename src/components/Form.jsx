import "./form.scss";

const Form = () => {
  return (
    <div className="form-section">
      <h1>Form:</h1>

      <div className="form-container">
        <form>
          <label for="orgname">Naam organisatie</label>
          <input
            type="text"
            id="orgname"
            name="orgname"
            placeholder="i.e.: Netzo"
          />
          <br />

          <label for="isvisible">
            Organisatie is zichtbaar op Pride and Sports:
          </label>
          <input type="radio" id="yes" name="isvisible" value="yes" />
          <label for="yes">Yes</label>
          <input type="radio" id="no" name="notvisible" value="no" />
          <label for="no">No</label>
          <br />

          <p>Logo/foto organisatie:</p>
          <input type="file" id="myFile" name="filename" />
          <br />

          <label for="target-group">Organisatie doelgroep:</label>
          <select name="target-group" id="target-group" multiple>
            <option value="male">Male focus</option>
            <option value="female">Female focus</option>
            <option value="all">Open to all</option>
            <option value="safe-space">
              Safe space for Transgender / Non-Binary / Queer people (upon
              request)
            </option>
          </select>
          <p>
            Hold down the Ctrl (windows) or Command (Mac) button to select
            multiple options.
          </p>

          <label for="activiteiten">Activiteiten organisatie</label>
          <select id="activiteiten" name="activiteiten">
            <option disabled selected value>
              {" "}
              -- select an activity --{" "}
            </option>
            <option value="tennis">Tennis</option>
            <option value="volleyball">Volleyball</option>
            <option value="football">Football</option>
          </select>
          <br />

          <label for="shortdescr-nl">Omschrijving organisatie kort NL:</label>
          <textarea
            maxlength="500"
            id="shortdescr-nl"
            name="shortdescr-nl"
            placeholder="Korte omschrijving..."
          ></textarea>
          <br />

          <label for="longdescr-nl">Omschrijving organisatie land NL:</label>
          <textarea
            maxlength="1000"
            id="longdescr-nl"
            name="longdescr-nl"
            placeholder="Land omschrijving..."
          ></textarea>
          <br />

          <label for="shortdescr-en">
            Short description of your organization in EN:
          </label>
          <textarea
            maxlength="500"
            id="shortdescr-en"
            name="shortdescr-en"
            placeholder="Short description..."
          ></textarea>
          <br />

          <label for="longdescr-nl">
            Long description of your organization in EN:
          </label>
          <textarea
            maxlength="1000"
            id="longdescr-en"
            name="longdescr-en"
            placeholder="Long description..."
          ></textarea>
          <br />

          <label for="members">Aantal leden organisatie:</label>
          <input
            type="number"
            id="members"
            name="members"
            placeholder="i.e.: 45"
          />
          <br />

          <label for="members">
            Adres Trainingslocatie (Straatnaam + huisr. waar de sport
            activiteiten plaatsvinden):
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="i.e.: Insulindeweg 1001"
          />
          <br />

          <label for="postcode">Postcode Trainingslocatie:</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="i.e.: 1095 DH"
          />
          <br />

          <label for="members">Plaats Trainingslocatie:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="i.e.: Amsterdam"
          />
          <br />

          <label for="tournaments">Jaarlijkse toernooien:</label>
          <textarea
            maxlength="500"
            id="tournaments"
            name="tournaments"
            placeholder="i.e.: Sinterklaas toernooi"
          ></textarea>
          <br />

          <label for="competitions">Welke competities:</label>
          <textarea
            maxlength="500"
            id="competitions"
            name="competitions"
            placeholder="i.e.: Nevobo"
          ></textarea>
          <br />

          <label for="members">Organisatie website link:</label>
          <input
            type="website"
            id="website"
            name="website"
            placeholder="https://..."
          />
          <br />

          <label for="social-link">Sociale media link 1:</label>
          <input
            type="social-link"
            id="social-link"
            name="social-link"
            placeholder="Facebook"
          />
          <br />

          <label for="social-link">Sociale media link 2:</label>
          <input
            type="social-link"
            id="social-link"
            name="social-link"
            placeholder="Instagram"
          />
          <br />

          <label for="social-link">Sociale media link 3:</label>
          <input
            type="social-link"
            id="social-link"
            name="social-link"
            placeholder="e-mail"
          />
          <br />
          
          

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
