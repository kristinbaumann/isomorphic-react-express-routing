import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import template from './template';
import routes from '../shared/routes';

const server = express();

server.use('/assets', express.static('assets'));

server.get('*', (req, res) => {  
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const content = renderToString(<RouterContext {...renderProps}/>);
            res.send(template({
                body: content
            }));
        } else {
            res.status(404).send('Not Found');
        }
    });
});

server.listen(8080, () => {
  console.log('Listening on port 8080...');
});