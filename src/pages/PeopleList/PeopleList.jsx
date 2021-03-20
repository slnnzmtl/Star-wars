import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PeopleList from '../../components/PeopleList/PeopleList';
import SearcHBar from '../../components/SearchBar/SearchBar';
import SideBar from '../../components/SideBar/SideBar';
import { useStore } from '../../stores/hooks';
// import {useLazyLoading} from "./useLazyLoading";

import './PeopleList.scss';

const PeopleListPage = observer(() => {
  const [changed, setChange] = useState();
  const store = useStore('peopleListStore');
  const { peopleList } = store;
  const [pageNumber, setPageNumber] = useState(1);

  const filterChange = ({ array, key }) => {
    if (key) {
      setChange(array);
    } else {
      setChange();
    }
  };

  useEffect(() => {
    store.setPeopleList([]);
  }, []);

  useEffect(() => {
    store.getPeopleList(pageNumber);
  }, [pageNumber]);

  // const appendItems = useCallback(id => {
  //   // setPageNumber(pageNumber + 1);
  //   console.log(id);
  //   console.log('append');
  // }, [pageNumber, setPageNumber]);

  // const [onScroll, containerRef] = useLazyLoading({
  //   onIntersection: appendItems,
  //   delay: 1200
  // });

  return (
    <div className="people-list-page">
      <div className="scroll-container">
        <PeopleList data={changed || peopleList} />
        <button type="button" className="people-list-page__button" onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
      <SideBar>
        <SearcHBar data={peopleList} setChange={filterChange} />
      </SideBar>
    </div>
  );
});

export default PeopleListPage;
