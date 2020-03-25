import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UrlForm from '../components/urlForm';
import UrlList from '../components/urlList';
import { loadPrivateURL } from '../redux/privateURL';

function Urls() {
  const userId = useSelector(state => state.auth.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPrivateURL(userId));
  }, []);

  return (
    <>
      <UrlForm isPrivate />
      <UrlList isPrivate />
    </>
  );
}

export default Urls;
