// Assuming 'res' is of type 'Response' from the 'fetch' API
fetch(url)
  .then((res: Response) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data: any) => {
    // Process the data
    console.log(data);
  })
  .catch((error: Error) => {
    console.error('There has been a problem with your fetch operation:', error.message);
  });
