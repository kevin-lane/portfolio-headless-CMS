import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../../components/layout/layout';

export default function Index() {
  const [traditionalChecked, setTraditionalChecked] = useState(false);
  const [headlessChecked, setHeadlessChecked] = useState(false);
  const [traditionalItems, setTradiditonalItems] = useState([]);
  const [headlessItems, setHeadlessItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const data = useStaticQuery(graphql`
  query {
    allContentfulCmsTechnologies {
      edges {
        node {
          title
          description {
            description
          }
          category
          id
        }
      }
    }
  }
  `)

  //Set items to all or filtered items depending of their category
  useEffect(() => {
    setAllItems(data.allContentfulCmsTechnologies.edges);
    setHeadlessItems(data.allContentfulCmsTechnologies.edges.filter(item => {
      return item.node.category === "Headless"
    }));
    setTradiditonalItems(data.allContentfulCmsTechnologies.edges.filter(item => {
      return item.node.category === "Traditional"
    }));

  }, [])

  //Function returning technologies depending of boolean states
  //i.e if checkbox are checked or not
  function filterTechnologies(){
    if(headlessChecked === true){
      return(
        headlessItems.map(({node}) => {
        console.log(node.title);
        return(
          <li key={node.id}>{node.title}</li>
        )
      })
      )
    }
    else if(traditionalChecked === true){
      return(
        traditionalItems.map(({node}) => {
        console.log(node);
        return(
          <li key={node.id}>{node.title}</li>
        )
      })
      )
    }
    else{
      return(
        allItems.map(({node}) => {
        console.log(node.title);
        return(
          <li key={node.id}>{node.title}</li>
        )
      })
      )
    }
  }

  return (
    <Layout>
      <h3>Technologies used in the CMS course</h3>
      <div id='category-checkbox'>
        <h4>CMS Category</h4>
        <div class="form-check form-check-inline">
          <input class="form-check-input"   type="checkbox" id="traditional-check"  value="Traditional"
          onClick={() => setTraditionalChecked(!traditionalChecked)}/>
          <label class="form-check-label"         for="traditional-check">Traditional</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="headless-check" value="Headless"
          onClick={() => setHeadlessChecked(!headlessChecked)} />
          <label class="form-check-label"       for="headless-check">Headless</label>
        </div>
      </div>

      <ul>
        {filterTechnologies()}
      </ul>
    </Layout>
  )
}
