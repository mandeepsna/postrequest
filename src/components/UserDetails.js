const UserDetails=(props) => {
  
    return ( <div className="col-md-6 mx-auto">
       
      <table className="table" >
        <tr>

          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>City</th>
        </tr>
        {props.userarray.map((element) => {
          return  <tr>
              <td>{element.firstName + " " + element.lastName}</td>
              <td>{element.Email}</td>
              <td>{element.Gender}</td>
              <td>{element.City}</td>
            
            </tr>

        })}
      </table>
    </div>
  );
};

export default UserDetails;
