<h1>Nomina</h1>
<?
	require_once('configVideos.php');
?>

<section class="miniaturas">
	<?foreach($vNomina as $item){
		$contenido = explode("##", $item);?>
			<article>
				<a href="#"><img src=<?=$contenido[1]?> id='img_<?=$contenido[2]?>'></a>
				<p><?=$contenido[0]?></p>
			</article>
	<?}?>
</section>