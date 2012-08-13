
<h1>Bienvenidos</h1>
<?
	require_once('configVideos.php');
?>
<p>Bienvenidos a los videos tutoriales de ADN (Administrador de Negocios), aquí podrá encontrar los videos de ayuda para configurar y manejar las diferentes opciones del aplicativo.</p>
<section class="miniaturas">
	<?foreach($vPrincipal as $item){
		$contenido = explode("##", $item);?>
			<article>
				<a href="#"><img src=<?=$contenido[1]?> id='img_<?=$contenido[2]?>'></a>
				<p><?=$contenido[0]?></p>
			</article>
	<?}?>
</section>