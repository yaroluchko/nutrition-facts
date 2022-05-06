const template = document.createElement("template");
template.innerHTML = `
<style>
    :host {
        display: block;
        border: 1px solid black;
        padding: 10px;
        width: 250px;
        height: 300px;
        box-sizing: border-box;
        background-color: var(--bg-color);
        color: var(--color);
    }
    .title {
      font-weight: bold;
      font-size: 1.2em;
    }
    .serving {
      font-weight: bold;
      font-size: 1em;
    }

    table {
      width: 100%;
      border-top: 2px solid var(--color);
    }

    table:nth-child(even) {
      border-bottom: 2px solid var(--color);
      margin-bottom: 18px;
    }

    th {
      text-align: left;
    }

    th:nth-child(2) {
      text-align: right;
    }

    tr {
      margin-top: 3px;
    }

    tr > td{
      text-align: left;
    }
    tr > td:last-child {
      text-align: right;
    }
    .grams {
      font-size: 0.8em;
    }
</style>
<header>
<section class="title">Nutrition Facts</section>
<section class="serving">Serving Size 1 scoop</section>
</header>
<section class="grams">
    <table> 
        <th>Amount Per Serving</th>
        <th>% Daily Value </th>
        <tr>
            <td> <b>Calories</b> <span class="calories"> </span></td>
            <td class="calories fat"></td>
        </tr>
        <tr>
            <td><b>Fat</b> <span class="fat"> </span></td>
            <td class="fat percentage"></td>
        </tr>
        <tr>
            <td><b>Carbohydrates</b> <span class="carbohydrates"> </span></td>
            <td class="carbohydrates percentage"></td>
        </tr>
        <tr>
            <td><b>Protein</b> <span class="protein"> </span></td>
            <td class="protein percentage"></td>
        </tr>
    </table>
    <table>
    <tbody>
      <tr>
        <td>
          Vitamin A
          <span class="vit-a">10%</span>
        </td>
        <td>
          Vitamin C
          <span class="vit-c">0%</span>
        </td>
      </tr>
      <tr class="thin-end">
        <td>
          Calcium
          <span class="calcium">10%</span>
        </td>
        <td>
          Iron
          <span class="iron">6%</span>
        </td>
      </tr>
    </tbody>
  </table>
  <span>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</span>
</section>
`;

export default template;