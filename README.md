# template-web

Vite + Vue 3 + VueRouter 4 + TailwindCSS + Heroicons

CDN Library: axios + SweetAlert2 + NProgress

## Get Started

Click **Use Template** or this [link](https://github.com/yzITI/template-web/generate).

Change project name in  `package.json` and `index.html`
```
"name": "project-name"

<!-- you may change lang as well -->
<title>Your Title</title>
```

Install dependency

```
npm i
```

Run dev server

```
npm run dev
```



|File|Description|
|---|---|
|[/data/*](./SRPC/data.md)|Include get and update data operations|
|[/permission/*](./SRPC/permission.md)|Include add, get and delete permission operations|



```srpc.Z.get(jwt, _id, data = { '': 1 })```: A gets B’s data.

**parameter:**
- ```jwt```: current user, A’s jwt.  
- ```_id```: B’s “_id”.  
- ```data```: the data A wants to get from B. 
(Ps:      
     - '': all data need to be get;  
     - 0: do not query; >=1: query) 

**rules:**
1. A doesn’t have access to read B’s data, return “false”.
2. B doesn‘t exist, return “undefined”.
3. No B’s data, return “[]”.

**test scene description:**
- for rules1: A = user "root", B = user "test"
1. A has access to read B's data, ``` data = { '': 0 }```
expected outcome: return false

2. A has access to read B's data, ``` data = { '': 1 }```

- for rules2:

- for rules3:


srpc.Z.update
User A update user B data 

srpc.Z.template



srpc.Z.getPermission


srpc.Z.delPermission


srpc.Z.addPermission




