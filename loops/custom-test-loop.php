<?php 
/*
This loop is used in the Archive and in the Home [.php] templates.
*/
?>
<div class="col-md-6 col-sm-12">
  <div class="card mb-4 shadow-sm">

    <?php the_post_thumbnail('medium', ['class' => 'w-100']);    ?>
    
    <div class="card-body">
        <?php if (!get_theme_mod("singlepost_disable_date") ): ?>
          <small class="text-muted"><?php the_date() ?></small>
        <?php endif; ?>
        
        <h4>Custom Loop from Child</h4>
        <h2><a class="stretched-link" href="<?php the_permalink() ?>"><?php the_title() ?></a></h2>
        <p class="card-text"><?php the_excerpt(); ?></p>
        <!--
        <div class="d-flex justify-content-between align-items-center"> 
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
        </div>
        -->
    </div>
  </div>
</div>