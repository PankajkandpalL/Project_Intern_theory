function append(){

    return`
       
    <div class="field">
    <input type="text" name="City" id="City" oninput="mainn()" placeholder="Enter first two word"/>
    <label for="City"> City name</label>
    </div>
    <div id="selec">
    <select>
        <option>How did you find us ?</option>
        <option>Google adds</option>
        <option>Social Media</option>
        <option>From friends</option>
        <option>Other</option>
       </select>
       <select>
        <option>What are you looking for ?</option>
        <option>Internships</option>
        <option>Jobs</option>
        <option>Both</option>
       </select>
       </div>
    `
}
export default append;