<?php
require_once('components/td.php');

?>
<form action="#">
    <?php $td1 = new Td('val1'); echo $td1->render(); ?>
    <?php $td2 = new Td('val2'); echo $td2->render(); ?>
    <?php $td3 = new Td('val3'); echo $td3->render(); ?>
</form>