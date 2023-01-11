import React from 'react';
import ArticleCard from './article-card';
import {Post} from '../../constants/Post';

export default {
  title: 'Article card',
  component: ArticleCard
};

const samplePost: Post = {
  '_id': '06991263-0574-4fcc-9e4d-9a128c7cf121',
  'author': {
    '_id': '06991263',
    'image': {
      '_type': 'image',
      'asset': {'_ref': 'image-a06ab1331c420fc86a6cca6532ddeb2cd9f0c9f4-4000x4000-jpg', '_type': 'reference'}
    }, 'name': 'Samantha Anderson', 'slug': {'_type': 'slug', 'current': 'samantha-anderson'}
  },
  'body': [{
    '_key': 'd3870d9e44d8',
    '_type': 'block',
    'children': [{
      '_key': 'dcaebcdae5030',
      '_type': 'span',
      'marks': [],
      'text': 'Voluptatem officiis est animi et quidem eaque. Aut nemo odio cumque officiis explicabo ea. Fugiat et placeat ratione in molestiae voluptatum.\n\nUt voluptas ullam quam non vel placeat. Qui porro quam iste. Laboriosam ratione delectus dolor sint voluptatem corporis. Id minus labore eligendi. Similique voluptates quidem recusandae quidem aperiam exercitationem reprehenderit.\n\nVoluptas minima non vel error. Modi sed officia quia corporis. Nemo voluptatem ea nam assumenda corrupti. Vero aliquid odit consequuntur. Architecto quas eius ut ea commodi.\n\nEt ut alias autem nihil aut minus. Aut eaque quidem minus. Excepturi fugit excepturi dicta voluptatum. Provident animi corporis eos et voluptatem qui.\n\nAnimi accusamus vitae in quia similique in pariatur. Est quam hic quis. Facere reiciendis quidem molestias et placeat quasi. Iure repellat sequi esse aspernatur quas neque unde. Quos reprehenderit asperiores qui quis expedita consectetur.\n\nVitae est similique repellendus non est incidunt. Fugit sed quis fugiat id aut velit quia. Ad quisquam omnis est officia.\n\nEst perferendis sint illo provident veritatis incidunt ex. Saepe et ut sequi delectus eum dolor aut. In at assumenda odio aliquam optio. Aspernatur et vel molestiae est dignissimos ut vero.\n\nVoluptatem quia placeat aliquid ut ab. Quasi cum voluptas blanditiis debitis enim quo numquam. Rerum a quis quia consequuntur fugiat rerum sunt.\n\nSoluta ea quo mollitia totam molestias assumenda aut ipsa. Ea quo voluptas eligendi aut nihil nemo. Vitae exercitationem culpa at vero voluptatibus qui.'
    }],
    'markDefs': [],
    'style': 'normal'
  }],
  'categories': [{'title': 'Finance'}, {'title': 'Business'}],
  'mainImage': {
    '_type': 'image',
    'asset': {'_ref': 'image-ce25ae375d72f7c28fb17d9309508b6ac610c7e4-2426x1728-jpg', '_type': 'reference'}
  },
  'publishedAt': '2022-10-22T13:03:07.712Z',
  'slug': {'_type': 'slug', 'current': 'here-s-what-really-matters-in-finance'},
  'title': "Here's What Really Matters in Finance"
};

const sampleCategory = {
  '_id': '1b7d20c1-4154-4fd0-af53-fb1830a9e449',
  'description': 'Traditionally a section within larger news publications, entertainment-focused sites have been rapidly growing with the popularization of social media. Nowadays, this highly popular category has developed a long list of potential blog niches ideas to center your content on.\n\n',
  'title': 'Entertainment '
};

export const Default = (): JSX.Element => <ArticleCard post={samplePost}/>;
