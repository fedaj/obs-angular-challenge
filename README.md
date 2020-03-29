# ObsAngularChallenge

This repository contains the code for the angular challenge posed by OBS during the recruitment process.

## Target

To build a basic prototype for the frontend of a task management application using Angular. The Angular application will use a REST service provided by OBS as its backend.

## Backend API

### Create
POST: http://amimusa.xen.prgmr.com:3000/tasks/:owner

Params:
&quot;owner&quot;: &lt;integer&gt;

Body:
{
&quot;description&quot;: &lt;string&gt;,
&quot;completed&quot;: &lt;boolean&gt;
}

### Read
GET: http://amimusa.xen.prgmr.com:3000/tasks/:owner

Params:
&quot;owner&quot;: &lt;integer&gt;

### Update
PATCH: http://amimusa.xen.prgmr.com:3000/tasks/:id

Params:
&quot;id&quot;: &lt;string&gt;

Body:
{
&quot;description&quot;: &lt;string&gt;,
&quot;completed&quot;: &lt;boolean&gt;
}

### Delete
DELETE: http://amimusa.xen.prgmr.com:3000/tasks/:id

Params:
&quot;id&quot;: &lt;string&gt;