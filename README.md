# jquery-table-sortable
Easily turn any html table into a sortable one.

## Usage

#### The Markup
To make a column sortable, simply add a 'sortable' **class** and the field name as the **id** to the **th** element.  In the following example, **First Name** will by sorted by the **first_name** table field.  The **sortable** class is used for the example, but the class name can be anything.
```        
<!-- The table -->
<thead>
  <tr>
    <th class="sortable" id="first_name">First Name</th>
    <th class="sortable" id="last_name">Last Name</th>
    <th class="sortable" id="email">Email</th>
    <th>Action</th>
  </tr>
</thead>
```

#### The JS Bind
Simply bind to the 'sortable' class.
```
jQuery(document).ready(function(){
  jQuery('.sortable').sorTable();
});
```


#### The Result
Now the table header links should have an **sortby** and **dir** query string param attached to them.  This only takes care of the front end, so you will need to implement your logic in the backend script.  

```
// PHP backend example
$sortby = isset($_GET['sortby']) ? $_GET['sortby'] : 'id';
$dir = isset($_GET['dir']) ? $_GET['dir'] : 'desc';

$sth = $dbh->prepare('SELECT * FROM users order by :sortby :dir');
$sth->bindParam(':sortby', $sortby, PDO::PARAM_STR);
$sth->bindParam(':dir', $dir, PDO::PARAM_STR);
$sth->execute();
```
